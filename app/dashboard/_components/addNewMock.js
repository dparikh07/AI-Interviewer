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
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { chatSession } from '@/utils/GeminiAIModal';

function AddNewMock() {
  const [openDailog,setopenDialog] = useState(false);
  const [jobRole,setjobRole] = useState();
  const [jobDescription,setjobDescription] = useState();
  const [yearsOfExperience,setyearsOfExperience] = useState();

  const onSubmit=async(e)=>{
    e.preventDefault()
    console.log(jobRole)
    const InputPrompt = "Job Role : "+jobRole+", Job Description : "+jobDescription+"Job Experience : "+yearsOfExperience+", Based on these critarea give us the "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview questions along with answers in JSON Format"
    const result = await chatSession.sendMessage(InputPrompt);
    console.log(result.response.text());
  }
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all' onClick={()=>setopenDialog(true)}>
        <h2 className='font-bold text-lg'>+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Tell us About your Interview</DialogTitle>
          <DialogDescription>
          <form onSubmit={onSubmit}>
          <div>
           <h2>Add details about your interview</h2>

           <div className='mt-5'>
            <label>Job Role</label>
            <Input placeholder="Ex-Full Stack Developer" onChange={(event)=>setjobRole(event.target.value)}/>
           </div>
           <div className='mt-5'>
            <label>Job Description</label>
            <Textarea placeholder="Type your answer here" onChange={(event)=>setjobDescription(event.target.value)}/>
           </div>
           <div className='my-5'>
            <label>Years of Experience</label>
            <Input placeholder="Ex-2" type="number" onChange={(event)=>setyearsOfExperience(event.target.value)}/>
           </div>
          </div>
            <div className='flex justify-end gap-5'>
              <Button variant='ghost' onClick={()=>setopenDialog(false)}>Cancle</Button>
              <Button>Okay</Button>
            </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    </div>
    
  )
}

export default AddNewMock
