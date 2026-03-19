const useForm = (initial = {}) => {
  const [values, setValues] = useState(initial);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, handleChange };
};