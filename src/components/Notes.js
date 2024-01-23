import React from 'react'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

export default function Notes() {
  return (
    <>
    <div className='container my-4 col-8'>
        <AddNote/>
      <NoteItem/>
    </div>
    </>
  )
}
