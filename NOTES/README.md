mny router or nesting routes ko seekha "index" ka ksy use ho nested route me wo be seekha! 



useParams -  url sy params catch krny k liye or saat ye aik state k jesy be kaam krta hai 

const \[params , setParams ] = useParams()



agr purany url k filter ko rakhna hai lkn new be add krna hai to kuch esy code hoga



&#x20; function handleFilterChange(key, value) {

&#x20;       setSearchParams(prevParams => {

&#x20;           if (value === null) {

&#x20;               prevParams.delete(key)

&#x20;           } else {

&#x20;               prevParams.set(key, value)

&#x20;           }

&#x20;           return prevParams

&#x20;       })

&#x20;   }



state in react router ? state attribute sy hum koi value prop k jesy pass kr skty hain jisy kisi or component me use kr pain gy;

or osy get krny k liye hum aik hook useLocation() ka use krty hain!



loader ?  component k load hony sy phly data load krna , send krna or agr error hoto osy be throw krna!

function loader(){} ko os component me set krty hain jahan sy data fetch kr k snd krna ho!

phir  <Route path="vans" element={<Vans />} loader={vansLoader} /> 

kuch is trah isy pass krty hai!

phir os data ko use krny k liye import { useLoaderData } from "react-router-dom"

ka use hota ahi   

const data = useLoaderData()

&#x20; console.log(data) sy sra data mil jain ko loader function ny return keya hoga

const search = location.state?.search || "";

const type = location.state?.type || "all";







agr loader koi error throw kry to

errorElement={<h1>There was an error!</h1>}

error catch krny k liye ; ab isy jis route me lgao y ye wahi error show kry ga; agr parent me lga dey "/" pr to poori website pr show hoga , agr kisi child me lagaya tha to bs wahi show ho ga phir kis be jagha sy aya ho ya kisi be component sy aya ho



error component throw error anytime to you run your component it could be an error that occurs in the loader , or just happing inside your component!



loader component me jo error set keya jata hai osy get krny ka aik or method hai , ta key hum apni mrzi sy error display kr say 

const error = useRouteError()

console result- > 

{message: 'Failed to fetch vans', statusText: 'Bad Request', status: 400}



react me <form> ki bjai react router ka <Form> use krna seekha or saat he action function ka use seekha ab mujh handleChange or onSubmit ki zarort nahi prti me bs action() function bna kr osy <Route path="login" action={loginAction} /> kr k use kr skta hu or same loader() k jesy is me snd huwa data received krny k liye mujh bs useActionData ko react-router-dom sy call krna hoga !





redirect() user ko redirect krny k liye tha or is me dosri cheezy be pass ho skti hain jesy

redirect("/login?message=login first");



isy trah <Navigate to="" /> and useNavigate() be user ko kisi route pr bejhny k liye hoty hain!



lkn is jesi aik or function hain useNavigation() ye diff hai useNavigte() sy useNavigation ka use route sy data mtlb jb hum Action react-router-dom  k function ka use kr k data snd krty hain to isky through hum os data ko ley skty han is me diff properties hoti hain!

{state: 'idle', location: undefined, formMethod: undefined, formAction: undefined, formEncType: undefined, formData: undefined}

jhan me phly useState ka use kr k "idle" or "submitting" ka use kr rha tha wahn ab bina kisi state k mujh bs bs useNavigation ka use kr k me

oski property state\* ko call krna hai , or ye khud submit or idle hoti hain mujh manuallay kuch nahi krna pry ag or isy sy me Form ka send huwa data be get kr skta hu!



Or Meny sekha hai k ksy jb loader() ko use krny ka mtlb hai k phly data load hoga phir wo component render hoga , yhan developer experience to both acha tha k phly data phir render , lkn isi k saat user experience khraab  ho gya , mtlb k user jb route pr click kry to noting happen immediately user ko feel he nhi hota osny kuch click keeya hai to jb data load ho jata phir aik dm sy component load hota hai!

isi cheez ko fix krny k liye mny react-router-dom k defer() function ko use keeya hai e.g defer({user : loader.user}) or defer ka data access krny k liye aik or APi component <Await/> ko react-router-dom sy ye keya jata hai isky andr aik render function call hota hai jo isky child sy data get kr k <Await/> yahni apny parent ko deyta hai! 

&#x20;<Await resolve={dataPromise.vans}>

&#x20;               {renderVanElements}

&#x20;           </Await>

lkn problem ab be wahi hai k user ko smjh nhi ata data load ho rha hai ya nahi is liye mny <React.Suspense > ka use keeya is me aik fallback pass keya jata hai to loader k tor pr kaam krta hai jb tk data fetch na ho jai!

<React.Suspense fallback={<h1>Loading Data....</h1>}>

&#x09;

</React.Suspense>

