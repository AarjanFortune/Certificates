import { renderToString } from 'react-dom/server';


import './App.css';
import pdf from 'html-to-pdf';


import { axiosInstance } from './config';

// Send the PDF buffer to the server




function App() {
  
 
   
  
  return (
    <div className="App">
       <article style={{position:'relative'}} >
        <img src="https://res.cloudinary.com/ddgpavgah/image/upload/v1672740954/certificate/Certificate_of_Participation_Issued_117_1_.pdf_2_wap4c8.png" alt="hero" style={{height:'100%',objectFit:'contain',width:"100%"} }/>
         <div className="some" style={{position:'absolute',bottom:"60%", display:"flex",flexDirection:"row",justifyContent:"center",width:"100%",fontSize:"4rem"}}>
           <b>Aarjanmani Kandel</b>
         </div>
        
      </article>
    </div>
  );

}
 const createpdf=async()=>{
    const html = renderToString(<App/>) 
    console.log(html)
  await pdf.create(html).toBuffer((err, buffer) => {
  if (err) return console.log(err);

  console.log(buffer); 
// The PDF buffer

 axiosInstance.get('/', buffer, {
  headers: {
    'Content-Type': 'application/pdf'
  }
}).then(response => {
  console.log(response);
}).catch(error => {
  console.error(error);
});
  
})
 

 }

  createpdf()
export default App;
