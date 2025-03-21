import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-momentum-upload-component',
  templateUrl: './momentum-upload-component.component.html',
  styleUrls: ['./momentum-upload-component.component.scss'],
})
export class MomentumUploadComponentComponent {
  @Input() formControl!: FormControl;
  imageUrl: string | ArrayBuffer | null = null;
  errorMessage: string | null = null;
  readonly MAX_SIZE = 600 * 1024; // 600KB
  readonly VALID_IMAGE_TYPES = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/svg+xml',
  ];

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      // Check file size
      if (file.size > this.MAX_SIZE) {
        this.errorMessage = 'File size exceeds 600KB limit';
        return;
      }

      // Check file type
      if (!this.VALID_IMAGE_TYPES.includes(file.type)) {
        this.errorMessage =
          'Invalid file type. Please select an image (JPG, PNG, GIF,SVG)';
        return;
      }

      this.errorMessage = null;

      const img = new Image();
      img.onload = () => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target?.result;
          this.formControl.setValue(file);
        };
        reader.readAsDataURL(file);
      };

      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  clearImage(event: Event) {
    event.stopPropagation();
    this.imageUrl = null;
    this.errorMessage = null;
    this.formControl.setValue(null);
    (document.getElementById('fileInput') as HTMLInputElement).value = '';
  }
}
