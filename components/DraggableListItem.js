import React, { useRef } from 'react';
import { View, FlatList, PanResponder, Animated } from 'react-native';

const DraggableListItem = ({ item }) => {
  // Create a ref for the Animated.ValueXY object to store the position of the item
  const pan = useRef(new Animated.ValueXY()).current;

  // Create a PanResponder to handle touch gestures
  const panResponder = useRef(
    PanResponder.create({
      // Allow the component to respond to touch events
      onStartShouldSetPanResponder: () => true,
      // Update the position of the item as it is dragged
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      // Handle logic when dragging ends
      onPanResponderRelease: () => {
        // Add any additional logic you need when dragging ends
      }
    })
  ).current;

  return (
    // Render a draggable item using an Animated.View
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        // Apply the translation to the item based on its position
        transform: [{ translateX: pan.x }, { translateY: pan.y }]
      }}
      // Attach the PanResponder handlers to the item
      {...panResponder.panHandlers}
    />
  );
};