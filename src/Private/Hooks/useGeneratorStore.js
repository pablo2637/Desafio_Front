import { useDispatch} from 'react-redux';
import  {onsetFormData, onsetQRValue } from '../../Store/Slices/userSlice';

export const useGeneratorStore = () => {
    const dispatch = useDispatch();

    // const formData = useSelector((state) => state.generate.formData); 
    // const qrValue = useSelector((state) => state.generate.qrValue); 
  

  const updateFormData = (newFormData) => {
    dispatch(onsetFormData(newFormData));
  };

  const updateQRValue = (newQRValue) => {
    dispatch(onsetQRValue(newQRValue));
  };

  return {
    // formData,
    // qrValue,
    updateFormData,
    updateQRValue,
  };
};
