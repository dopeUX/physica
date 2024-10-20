const getTime = () => {
   return {
    morning: ['09.00 AM', '09.30 AM', '10.00 AM', '10.30 AM', '11.00 AM', '11.30 AM', '12.00 PM'],
    noon: [
        '12.30 PM', 
        '01.00 PM', 
        '01.30 PM', 
        '02.00 PM', 
        '02.30 PM', 
        '03.00 PM', 
        '03.30 PM', 
        '04.00 PM'
      ],
      evening :[ 
        '04.30 PM', 
        '05.00 PM', 
        '05.30 PM', 
        '06.00 PM', 
        '06.30 PM', 
        '07.00 PM', 
        '07.30 PM', 
        '08.00 PM', 
        '08.30 PM', 
        '09.00 PM']
   }
}

export default getTime;