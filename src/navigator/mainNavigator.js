import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard13188007Navigator from '../features/Dashboard13188007/navigator';
import BlankScreen1188006Navigator from '../features/BlankScreen1188006/navigator';
import BlankScreen0188005Navigator from '../features/BlankScreen0188005/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard13188007: { screen: Dashboard13188007Navigator },
BlankScreen1188006: { screen: BlankScreen1188006Navigator },
BlankScreen0188005: { screen: BlankScreen0188005Navigator },

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
