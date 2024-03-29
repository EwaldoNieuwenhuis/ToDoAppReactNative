import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TaskIcon from './TaskIcon'; // Importeer het TaskIcon component
import CheckBoxIcon from './CheckBoxIcon';

const Task = (props) => {
  const [imageSource, setImageSource] = useState(require('../assets/unchecked-checkbox.png'));
  const [isDone, setIsDone] = useState(false);

  const handleImageClick = () => {
    // Change the image source when clicked
    setImageSource(require('../assets/checked-checkbox.png'));
    setIsDone(!isDone);
  };

  return (
    <View style={[styles.taskBox, isDone && styles.taskDone]}>
      <View style={styles.textWithIconTasks}>

        <TaskIcon 
        color={isDone ? "#FFF09C" : "black"}
        style={styles.taskIcon}>
        </TaskIcon>

        <View style={styles.textTaskBox}>
          <Text style={styles.sectionTitle}>{props.text}</Text>
          
          {props.deadLine != null && (
            <Text style={styles.sectionTitle}>Deadline: {props.deadLine.toString()}</Text>
          )}
        </View>
      </View>
      <TouchableOpacity onPress={handleImageClick} style={styles.checkBox}>
        <CheckBoxIcon checked ={isDone} color="green"/> 
        {/* Hier gebruiken we de TaskIcon-component met de juiste kleur en grootte */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskDone: {
    width: 333,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#66F8C3',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  textWithIconTasks: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',

    gap: 5,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  checkBoxImage: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
    marginTop: 10,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10

  },
  sectionTitle: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'sans-serif-medium',
  },
  textTaskBox: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  taskBox: {
    width: 333,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  taskIcon: {
    width: '100%',
    height: '150%',
    resizeMode: 'contain',
    marginRight: 10,
  },
});

export default Task;
