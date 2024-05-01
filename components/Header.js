import Link from "next/link";

export default function Header(){
    return(
        <header>
           <Link href={'/'}>
            <h1>The Bubbly Baker</h1>
           </Link> 
        </header>
    )
}