import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserProvider } from "@/context";
import {
  LoginScreen,
  RegisterScreen,
  RegisterConditionQuestionScreen,
} from "@/screens";
import MainTabNavigator from "./MainTabNavigator";

const PatientStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="RegisterConditionQuestion"
        component={RegisterConditionQuestionScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const PatientStackNavigator = () => {
  return (
    <UserProvider>
      <PatientStack.Navigator screenOptions={{ headerShown: false }}>
        <PatientStack.Screen name="Auth" component={AuthStackNavigator} />
        <PatientStack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerLeft: null, gestureEnabled: false,  }}
        />
      </PatientStack.Navigator>
    </UserProvider>
  );
};

export default PatientStackNavigator;
