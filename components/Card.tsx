 type cardprops = {

    title :string

 }

export default function Card({title}: cardprops){
    return(
        <div className="bg-surface rounded-xl h-60 w-80 flex items-center justify-center font-bold px-10">
            {title}
        </div>
    )
}