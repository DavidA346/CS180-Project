import { Tabs } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import * as Haptics from 'expo-haptics';

const TabsLayout = () => {
    //Function to trigger haptic feedback when pressed
    const triggerHapticFeedback = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };
  
    return (
        <Tabs
        screenOptions={{
            tabBarStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
              borderTopWidth: 0,
              position: 'absolute',
            },
          }}
        >      
            <Tabs.Screen name="index"
            options={{
              headerShown: false,
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                      fontSize: 20,
                      opacity: focused ? 1 : 0.5,
                      marginTop: 20,
                    }}>
                        <Image source={require('../../assets/titles/Hatch_text.png')}
                        style={{
                          resizeMode: 'contain',

                        }}></Image>
                    </Text>
                  ),

                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require("../../assets/Dragons/Red/egg_sprites/sprite_0.png")}
                        style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'contain',
                            opacity: focused ? 1 : 0.5,
                            marginBottom: 20,
                        }}
                    />
                ),

                tabBarButton: (props) => (
                  <TouchableOpacity
                    {...props}
                    onPress={() => {
                      triggerHapticFeedback();
                      props.onPress();
                    }}
                  />
                ),
            }}/>

            <Tabs.Screen name="shop"
            options={{
              headerShown: false,
              
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                      fontSize: 20,
                      opacity: focused ? 1 : 0.5,
                      marginTop: 20,
                    }}>
                      <Image source={require('../../assets/titles/Store_text.png')}
                        style={{
                          resizeMode: 'contain',
                          
                        }}></Image>
                    </Text>
                  ),

                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require("../../assets/item sprites/coin/coin_sprite.png")}
                        style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'contain',
                            opacity: focused ? 1 : 0.5,
                            marginBottom: 20,
                        }}
                    />
                ),

                tabBarButton: (props) => (
                  <TouchableOpacity
                    {...props}
                    onPress={() => {
                      triggerHapticFeedback();
                      props.onPress(); // Call the default onPress behavior
                    }}
                  />
                ),
            }}/>

             <Tabs.Screen name="inventory"
            options={{
                headerShown: false,
                
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                      opacity: focused ? 1 : 0.5,
                      marginTop: 20,
                    }}>
                      <Image source={require('../../assets/titles/Brood_text.png')}
                        style={{
                          resizeMode: 'contain',
                          
                        }}></Image>
                    </Text>
                  ),

                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require("../../assets/Dragons/Red/adult.gif")}
                        style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'contain',
                            opacity: focused ? 1 : 0.5,
                            marginBottom: 20,
                        }}
                    />
                ),

                tabBarButton: (props) => (
                  <TouchableOpacity
                    {...props}
                    onPress={() => {
                      triggerHapticFeedback();
                      props.onPress(); // Call the default onPress behavior
                    }}
                  />
                ),
            }}/>
        </Tabs>
    );
};

export default TabsLayout;