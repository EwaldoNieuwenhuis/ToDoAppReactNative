import React, { useRef } from 'react';
import { View, FlatList, PanResponder,DraggableListItem, Animated } from 'react-native';

const DraggableList = ({ data }) => {
return (
    // Render a FlatList to display the draggable items
    <View style={{ flex: 1 }}>
    <FlatList
        data={data}
        // Render each item as a DraggableListItem
        renderItem={({ item }) => <DraggableListItem item={item} />}
        // Use index as the key extractor
        keyExtractor={(item, index) => index.toString()}
    />
    </View>
);
};

export default DraggableList;