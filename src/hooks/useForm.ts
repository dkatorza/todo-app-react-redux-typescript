import { useEffect, useState } from 'react';

export const useForm = <T>(initialFields: T, cb: (data: T) => void) => {
  const [fields, setFields] = useState<T>(initialFields);

  useEffect(() => {
    cb(fields);
  }, [fields]);

  const handleChange = ({ target }: any) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    setFields((prevFields) => ({ ...prevFields, [field]: value }));
  };

  return { fields, handleChange, setFields };
};
