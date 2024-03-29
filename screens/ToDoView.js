import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Button, Text, TouchableOpacity, View } from 'react-native';
import Task from '../components/Task';
import DraggableList from '../components/DraggableList'; // Import the DraggableList component
const ToDoView = ({navigation}) => {
    const navigateToOtherScreen = () => {
        navigation.navigate('OtherView'); // Navigate to the Other screen
    };
    var dateTimeValue = new Date(); // Maanden in JavaScript zijn gebaseerd op een nul-index (0 voor januari, 1 voor februari, enz.)
    var formatDate = (date) => {
        return date.toLocaleDateString('nl-NL', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).replace('.', '');
    }
    const handlePress = () => {
        // Handel hier de knopdruk af
        navigateToOtherScreen();
    };
    dateTimeValue = formatDate(dateTimeValue);
    return (
        <View style={styles.container}>

            {/* Today's tasks */}
            <Text style={styles.sectionTitle}>Taken bepalen</Text>

            <View style={styles.tasksWrapper}>
                <Image
                    source={require('../assets/RePhaseLogo.png')} // Voeg het pad naar je afbeeldingsbestand toe
                    style={styles.image}
                />

                <TouchableOpacity onPress={handlePress} style={styles.createTaskBtn}>
                    <Text style={styles.buttonText}>+ Taak aanmaken</Text>
                </TouchableOpacity>
                <View style={styles.items}>

                    <Task
                        text={'Inschrijven voor marathon'}
                        deadLine={dateTimeValue}
                    />
                    <Task
                        text={'Hardloopschoenen kopen'}
                    />
                    <Task
                        text={'Trampoline springen'}
                        deadLine={formatDate(new Date(2024, 0, 4))}
                    />
                    <Task
                        text={'Knowledge lecture geven'}
                        deadLine={formatDate(new Date(1924, 4, 14))}
                    />


                    <TouchableOpacity onPress={handlePress} style={styles.archivedTasks}>
                        <Text style={styles.textWhite}>Gearchiveerde taken</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

export default ToDoView;
const styles = StyleSheet.create({
    textWhite: {
        color: "white"
    },
    archivedTasks: {
        backgroundColor: '#252525',
        width: 333,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        //margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5, // Dit is nodig voor Android om de schaduw weer te geven
        color: "#000000"
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center', // Plaats de inhoud horizontaal in het midden van de container
    },
    image: {
        width: 50, // Breedte van de afbeelding
        height: 50, // Hoogte van de afbeelding
        marginBottom: 50,
    },
    tasksWrapper: {
        //paddingHorizontal: 21,
        width: "100%",
        backgroundColor: 'white',
        height: "100%",
        paddingTop: 10,
        borderRadius: 25, // Adjust the value to change the roundness of the corners
        alignItems: 'center', // Plaats de inhoud horizontaal in het midden van de container

    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: 'white',
        fontFamily: 'sans-serif-medium',
        margin: 50

    },
    items: {
        justifyContent: 'flex-start',
        backgroundColor: "#E8E8E8",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5, // Dit is nodig voor Android om de schaduw weer te geven
        padding: 21,
        height: 364,
        //paddingTop: 10,
        alignItems: 'center', // Plaats de inhoud horizontaal in het midden van de container
    },
    createTaskBtn: {
        backgroundColor: '#3B43FF',
        width: 380,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5, // Dit is nodig voor Android om de schaduw weer te geven
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },

});
