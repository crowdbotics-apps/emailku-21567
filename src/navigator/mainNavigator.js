import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile144850Navigator from '../features/UserProfile144850/navigator';
import Maps144831Navigator from '../features/Maps144831/navigator';
import Settings144809Navigator from '../features/Settings144809/navigator';
import Settings144794Navigator from '../features/Settings144794/navigator';
import NotificationList144793Navigator from '../features/NotificationList144793/navigator';
import Maps144792Navigator from '../features/Maps144792/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile144850: { screen: UserProfile144850Navigator },
Maps144831: { screen: Maps144831Navigator },
Settings144809: { screen: Settings144809Navigator },
Settings144794: { screen: Settings144794Navigator },
NotificationList144793: { screen: NotificationList144793Navigator },
Maps144792: { screen: Maps144792Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
