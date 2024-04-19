import List from "../components/List";
import Visual from "../components/Visual";
export default function Recipes() {
    return (
        <>
            <Visual pageTitle={'List of Recipes'} pageType={'sub'} />
            <main id='main'>
                <section>
                    <h2>Recipes</h2>
                    <List 
                        section='Recipes'
                    />
                </section>
            </main>
        </>
    )
};