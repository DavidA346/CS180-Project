import { StyleSheet, Text, View, ImageBackground, Image, FlatList, Pressable } from "react-native"
import useStore from "../../store/useStore";
import * as Haptics from 'expo-haptics'; 


const Inventory = () => {
    const creatureInventory = useStore(state => state.creatureInventory);
    // gold balance & click‐to‐earn
    const gold = useStore(state => state.gold);
    const incrementGold = useStore(state => state.incrementGold);

    const dragonCollection = creatureInventory.filter(
        (creature) => creature.type === 'Dragon'
    );
        
    const drakeCollection = creatureInventory.filter(
        (creature) => creature.type === 'Drake'
    );
        
    const wyvernCollection = creatureInventory.filter(
        (creature) => creature.type === 'Wyvern'
    );

    //Function to trigger haptic feedback
    const triggerHapticFeedback = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    };

    //Renders the dragons to the screen
    const renderItem = ({ item }) => (
        //Make the cards pressable for later coin functionality
        <Pressable
            onPress={() => {
                triggerHapticFeedback();
                //only adults can increment gold
                if(item.stage === 'adult') {
                    incrementGold();
                }
            }}
                style={({ pressed }) => [
                styles.card,
                //Changes the cards color and opacity when pressed
                { backgroundColor: pressed ? 'white' : '#cad0d0',
                    opacity: pressed ? 1 : 0.8, 
                }
          ]}>
            <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            </View>
        </Pressable>
      );
    
    return (
        //Shows the image as the background for the screen
        <ImageBackground
            source={require('../../assets/backgrounds/collection_background.png')}
            style={styles.backgroundImage}
        >
            {/* Gold Badge */}
            <View style={styles.goldContainer}>
                <Text style={styles.goldText}>Gold: {gold}</Text>
            </View>
            <View style={styles.container}>
                <View>
                    {/* Displays the BROOD image to the screen */}
                    <Image
                        source={require('../../assets/titles/Brood_text.png')}
                        style={styles.title}
                    >
                    </Image>
                </View>

                {/* Displays the top section to the screen */}
                <View style={styles.statSection}>
                    <View>
                        <Text style={styles.stats}>Totals</Text>
                        <Text style={styles.dragonText}>Dragons: {dragonCollection.length}/6</Text>
                        <Text style={styles.drakesText}>Drakes: {drakeCollection.length}/2</Text>
                        <Text style={styles.wyvernsText}>Wyverns: {wyvernCollection.length}/2</Text>
                    </View>
                </View>

                 {/* Displays the dragon card lists to the screen */}
                 <FlatList  data={dragonCollection}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            numColumns={3}
                            contentContainerStyle={styles.dragonsGrid}
                            showsVerticalScrollIndicator={false}
                />

                <FlatList  data={drakeCollection}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            contentContainerStyle={styles.drakesGrid}
                            style={styles.TwoColumnList}
                            showsVerticalScrollIndicator={false}
                /> 

                <FlatList  data={wyvernCollection}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            contentContainerStyle={styles.wyvernsGrid}
                            style={styles.TwoColumnList}
                            showsVerticalScrollIndicator={false}
                />              
            </View>
        </ImageBackground>
    )
}

export default Inventory

//Styling for all the components above
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
    },

    title: {
        width: 150,
        resizeMode: 'contain',
        paddingTop: 50,
    },

    card: {
        borderRadius: 20,
        margin: 8,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
      },

    dragonsGrid: {
        paddingHorizontal: 20,
        paddingLeft: 1,
        justifyContent: 'center',
    },

    TwoColumnList: {
        width: '125%'
    },

    drakesGrid: {
        paddingLeft: '23%',
        justifyContent: 'center',
    },

    wyvernsGrid: {
        paddingLeft: '23%',
        justifyContent: 'center',
    },

    image: {
        width: 100,
        height: 100,
        marginLeft: '25%'
    },

    stats: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 18,
        justifyContent: 'center'
    },

    statSection: {
        flexDirection: 'row',
        gap: 120,
        paddingBottom: 10,
    },

    dragonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    drakesText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    wyvernsText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    goldContainer: {
        position: 'absolute',
        top: 50,
        right: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        zIndex: 10,
    },

    goldText: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#FFD700'
    },

});