import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Address } from "@/sanity.types";

interface RadioGroupDemoProps {
  data: Address[];
  setAddress: (address:string)=>void
}

const RadioGroupDemo: React.FC<RadioGroupDemoProps> = ({ data,setAddress }) => {

  return (
    <RadioGroup defaultValue="comfortable" className="w-full" onValueChange={(value) => setAddress(value)}>
      {data.map((item) => (
        <div key={item._id} className="flex items-center gap-3">
          <RadioGroupItem value={item._id} id={item._id} className='ring-1'  />
            <div className="flex flex-col text-sm">
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-500">{item.address}</span>
            </div>
        </div>
      ))}
    </RadioGroup>
  );
};
export default RadioGroupDemo;
