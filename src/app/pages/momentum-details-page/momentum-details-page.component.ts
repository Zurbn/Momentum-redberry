import { Component } from '@angular/core';

@Component({
  selector: 'app-momentum-details-page',
  templateUrl: './momentum-details-page.component.html',
  styleUrls: ['./momentum-details-page.component.scss'],
})
export class MomentumDetailsPageComponent {
  commentAuthor = [
    {
      author: 'ემილია მორგანი',
      comment:
        'დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.',
      avatar: '/assets/icons/avatar-comment.svg',
    },
    {
      author: 'ემილია მორგანი',
      comment:
        'დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.',
      avatar: '/assets/icons/avatar-comment.svg',
    },
    {
      author: 'ემილია მორგანი',
      comment:
        'დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.',
      avatar: '/assets/icons/avatar-comment.svg',
    },
    {
      author: 'ემილია მორგანი',
      comment:
        'დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.',
      avatar: '/assets/icons/avatar-comment.svg',
    },
  ];
  commentQuantity = this.commentAuthor.length;
}
