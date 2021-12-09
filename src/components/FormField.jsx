import tw from 'twin.macro';

const FormField = ({ label, type, value, onChange }) => {
   return (
      <div>
         <Label htmlFor={label}>
            {label}
            <Input
               type={type}
               placeholder={label}
               name={label}
               value={value}
               onChange={onChange}
            />
         </Label>
      </div>
   );
};

const Label = tw.label`text-dark-darker`;
const Input = tw.input`border-2 block p-4 w-full p-4 rounded mt-1 text-dark-black focus:(outline-none ring-2 ring-dark-black)`;

export default FormField;
