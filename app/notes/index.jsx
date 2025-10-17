import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import AddNoteModal from '@/components/AddNoteModal'
import NoteList from '@/components/NotesList'

const NoteScreen = () => {

  const [notes, setNotes] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [newNote, setNewNote] = useState('')

  //Creamos la funcion addNewNote
  const addNewNote = () => {
    if(newNote.trim() === '') return

    setNotes((prevNotes) => [
      ...prevNotes,
      {id: Date.now().toString(), text: newNote}
    ])

    setNewNote('')
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      {/* FLATLIST */ }
      <NoteList notes={notes} />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={()=> setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>

      {/* Creamos la ventana Modal */} 
      <AddNoteModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNewNote={addNewNote}
      />

    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:20,
      backgroundColor: '#fff'
    },
    addButton: {
      position: 'absolute',
      bottom: 50,
      left: 20,
      right:20,
      backgroundColor: '#007bff',
      padding:15,
      borderRadius:5,
      alignItems:'center'
    },
    addButtonText: {
      color: '#fff',
      fontSize:18,
      fontWeight: 'bold'
    },
    
    

})