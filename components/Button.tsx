

type ButtonProps = {
  name: string;
};

export default function Button({name}: ButtonProps){

    return(

    <button className="bg-surface px-6 py-3 rounded-xl cursor-pointer">
        {name}
    </button>
    )

}