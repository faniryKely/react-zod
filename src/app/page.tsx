import {ReactNode} from "react";
import {useForm} from 'react-hook-form';

export default function Home(): ReactNode {
  const {register, formState: {isSubmitting}, handleSubmit} = useForm();

  const Submit = (data: unknown): void => {
      console.log(data);
  } 
  return (
    <form action="">
      
    </form>
  );
}
