import { StyleSheet, Text, View } from 'react-native'

const NoteItem = ({ note}) => {
    return (
        <View style={styles.noteItem}>
            <Text style={styles.noteText}>{note.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    noteItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#c4c2c2ff',
      padding:15,
      borderRadius:5,
      marginVertical:5
    },
    noteText: {
      fontSize:18
    }
})

export default NoteItem