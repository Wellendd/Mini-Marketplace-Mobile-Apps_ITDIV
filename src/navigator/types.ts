import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../HomeComponent/Home';
import {DetailParamList} from '../Detail/Detail';
import {MyProductsParamList} from '../myProducts/MyProducts';
import {MinigameParamList} from '../minigames/Minigames';

export type RootStackParamlist = {
  Home: HomeParamList;
  Detail: DetailParamList;
  MyProducts: MyProductsParamList;
  Minigame: MinigameParamList;
};

export type RootStackScreenProps<T extends keyof RootStackParamlist> =
  NativeStackScreenProps<RootStackParamlist, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamlist {}
  }
}
