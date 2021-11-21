import { NameSpace } from '../root-reducer';
import {AuthorizationStatus} from '../../const';
import type {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
