import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { MomentumStoreEffects } from './effects';
import { MomentumStoreFacade } from "./facade";
import { MOMENTUM_STORE_KEY } from "./state";
import { MomentumStoreReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(MOMENTUM_STORE_KEY, MomentumStoreReducer),
        EffectsModule.forFeature([MomentumStoreEffects]),
    ],
    providers: [MomentumStoreEffects, MomentumStoreFacade],
})
export class MomentumStoreModule {}
