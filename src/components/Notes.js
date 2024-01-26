import React from 'react'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import Loginmsg from './Loginmsg'

export default function Notes() {
  return (
    <>
    <div className='container my-4 col-8'>
    <AddNote/>
    {localStorage.getItem('token') && <NoteItem/>}
    {!localStorage.getItem('token') && <Loginmsg/>}
    </div>
    </>
  )
}
