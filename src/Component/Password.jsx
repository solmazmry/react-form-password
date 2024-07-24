// import React from 'react'
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form"
import { Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row, Spinner } from "reactstrap"


// destrudaction 
function Password() {
     const [loading, setloading]= useState(false)
    const {handleSubmit,control, reset ,formState:{errors, isSubmitting,isValid},watch,}=useForm()
    //ikinci inputun deyerini izleyirik 
     const newPassword=watch('newPassword',"")

const onSubmit= async()=>{
setloading(true)
try {
  await new Promise((resolve) =>setTimeout(resolve,2000))
} catch (error) {
  console.log(error);
} finally{
  setloading(false)
  reset()
}
}

//!! boolentype cevrir
// inputmuzu renderde yaziriq 
// field deyerlerimizi goturmej ucun 
  return (
   <Container className="mt-5">
  <Row className="justify-content-center">
<Col md={6}>
<h2 className="text-center mb-4">Change Password</h2>
<Form onSubmit={handleSubmit(onSubmit)}>

<FormGroup>
    <Label htmlFor="currentPassword">Cari Şifrə</Label>
    <Controller
    name="currentPassword"
    control={control}
    defaultValue={''}
    rules={{
        required:"Cari şifrə tələb olunur"
    }}
    render={({field})=>(
        <Input 
        {...field}
        id="currentPassword"
       placeholder="Cari şifrə daxil edin "
       type="password"
       invalid={!!errors.currentPassword}
        />
    )}
    />
  {errors.currentPassword && <FormFeedback>{errors.currentPassword.message}</FormFeedback>}
</FormGroup>

<FormGroup>
    <Label htmlFor="newPassword">Yeni şifrə</Label>
    <Controller
    name="newPassword"
    control={control}
    defaultValue=""
    // qaydalar rules ile yaziriq
    rules={{
        required:"Yeni şifrə tələb olunur",
        minLength:{
          value: 8,
          message:'Şifrə ən az 8 sinvol olmalıdır',

        },
        // pattern: {
        //   value: /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        //   message:
        //     "Sifrə ən azı 1 böyük hərf, 1 kiçik hərf və 1 rəqəm olmalıdır",
        // },

    }}
    render={({field})=>(
        <Input 
        {...field}
        id="newPassword"
       placeholder="Yeni şifrə daxil edin "
       type="password"
       invalid={!!errors.newPassword}
        />
    )}
    />
  {errors.newPassword && <FormFeedback>{errors.newPassword.message}</FormFeedback>}
</FormGroup>


<FormGroup>
    <Label htmlFor="confirmNewPassword">Yeni şifrə təsdiqi</Label>
    <Controller
    name="confirmNewPassword"
    control={control}
    defaultValue=""
    // qaydalar rules ile yaziriq
    rules={{
        required:"Yeni şifrə təsdiqi tələb olunur",
        validate:(value)=>value===newPassword || 'Şifrələr uygun gəlmir'

        
       
    }}
    render={({field})=>(
        <Input 
        {...field}
        id="confirmNewPassword"
       placeholder="Yeni şifrə daxil edin "
       type="password"
       invalid={!!errors.confirmNewPassword}
        />
    )}
    />
  {errors.confirmNewPassword && <FormFeedback>{errors.confirmNewPassword.message}</FormFeedback>}
</FormGroup>


<Button 
 color="primary"
 type="submit"
 block
 disabled={isSubmitting|| loading|| !isValid}
  >{loading?<Spinner size="sm"/>:'Şifrəni dəyişin'}</Button>

</Form>
</Col>
  </Row>
<DevTool control={control} placement="top-right"/>
   </Container>
  )
}

export default Password
