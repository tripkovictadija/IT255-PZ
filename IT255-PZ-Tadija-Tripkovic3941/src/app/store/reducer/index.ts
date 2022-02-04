import { ActionReducerMap } from "@ngrx/store";
import { DoktorState } from "../state/doktor.state";
import { ZakazivanjeState } from "../state/zakazivanje.state";
import { doktorReducer } from "./doktor.reducer";
import { zakazivanjeReducer } from "./zakazivanje.reducer";

export const rootReducer = {};

export interface AppState{
    doktor: DoktorState;
    zakazivanje: ZakazivanjeState
}

export const reducers: ActionReducerMap< AppState, any>={
    doktor: doktorReducer,
    zakazivanje: zakazivanjeReducer
};