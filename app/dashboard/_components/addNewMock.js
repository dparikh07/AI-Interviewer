"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function AddNewMock() {
  const [openDailog,setopenDialog] = useState(false);
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all' onClick={()=>setopenDialog(true)}>
        <h2 className='font-bold text-lg'>+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
            <div className='flex justify-end gap-5'>
              <Button variant='ghost' onClick={()=>setopenDialog(false)}>Cancle</Button>
              <Button>Okay</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    </div>
    
  )
}

export default AddNewMock
