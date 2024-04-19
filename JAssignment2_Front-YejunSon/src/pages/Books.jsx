import List from "../components/List";
import Visual from "../components/Visual";
export default function Books() {
    return (
        <>
            <Visual pageTitle={'List of Books'} pageType={'sub'} />
            <main id='main'>
                <section>
                    <h2>Books</h2>
                    <List 
                        section='Books'
                    />
                </section>
            </main>
        </>
    )
};