import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { masterFetch } from '../../Api/fetch';


export const Allpuntos = ({user_id}) => {

    // const user = useSelector(state => state.user);
    // const user_id = user ? user.user_id : '';
    const [reward, setReward] = useState(null);


    const fetchReward = async () => {
        try {
            console.log("este es el user_id" + user_id)
          if (user_id) {
            const response = await masterFetch(`api/recycle/${user_id}`, 'GET');
            const { data } = response;
            
            setReward(data[0].total_rewards);
            console.log(total_rewards)
            console.log("esta es el responde" , response)
          }
        } catch (error) {
          console.error('Error fetching reward:', error);
        }
  };
 
    useEffect(() => {
       
      fetchReward();

    }, []);
   


  return  (
    <div>
      <p>Reward: {reward}</p>
  </div>
  ) 
  
}
