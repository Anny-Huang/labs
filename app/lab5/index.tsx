import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';


import { getUsers, addUser, deleteUser, updateUser } from '../../lib/supabase_crud' 
 
export default function App() {

  const [users, setUsers] = useState<any[]>([])
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');


  const fetchUsers = async () => {

    try {

      const data = await getUsers()

      setUsers(data)

    } catch (err) {

      console.error(err)

    }

  }
 
  useEffect(() => {

    fetchUsers()

  }, [])

  const handleEdit = (user: any) => {
    setEditingUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
  };

  const handleUpdate = async () => {
    if (!editingUser) return;
    try {
      await updateUser(editingUser.id, {
        name: editedName,
        email: editedEmail,
      });
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

 
    return (
    <View style={styles.container}>
      <Text style={styles.header}>📦 Supabase Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.email}</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity onPress={() => handleEdit(item)} style={styles.editBtn}>
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Button
        title="Add Dummy User"
        onPress={async () => {
          await addUser({
            name: 'John Doe',
            age: 25,
            email: `john${Date.now()}@doe.com`, // make email unique
          });
          fetchUsers();
        }}
      />

      {editingUser && (
        <View style={styles.editBox}>
          <Text style={styles.header}>✏️ Edit User</Text>
          <TextInput
            style={styles.input}
            value={editedName}
            onChangeText={setEditedName}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={editedEmail}
            onChangeText={setEditedEmail}
            placeholder="Email"
          />
          <Button title="Save Changes" onPress={handleUpdate} />
          <Button
            title="Cancel"
            onPress={() => setEditingUser(null)}
            color="gray"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 10,
  },
  editBtn: {
    backgroundColor: 'royalblue',
    padding: 6,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteBtn: {
    backgroundColor: 'crimson',
    padding: 6,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
  },
  editBox: {
    marginTop: 20,
    padding: 10,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});