import {supabase}  from './supabase'
 
// CREATE
export const addUser = async (user: {name: string, age: number, email: string }) => {
  const { data, error } = await supabase.from('sampledatabase').insert([user])
  if (error){
//   console.log(data);
console.error(error);
}
  return data
}
 
// READ
export const getUsers = async () => {
  const { data, error } = await supabase.from('sampledatabase').select('*')
  if (error) throw error
  return data
}
 
// UPDATE
export const updateUser = async (id: number, newData: any) => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .update(newData)
    .eq('id', id)
  if (error) throw error
  return data
}
 
// DELETE
export const deleteUser = async (id: number) => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .delete()
    .eq('id', id)
  if (error) throw error
  return data
}