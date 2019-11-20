import React from 'react';
import Tooltip from "../components/tooltip/tooltip";
import Hyphenated from 'react-hyphen';
import "./page.scss";

class Page extends React.PureComponent {

    render() {
        return (
            <div className="page swing-in-top-bck">
                <div className="page-navigation">
                    <div className="page-navigation-container">
                        <img className="page-navigation-item" src="/icons/back.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/contents.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/text size.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/search.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/settings.svg" alt="Italian Trulli"></img>
                        <img className="page-navigation-item" src="/icons/bookmarks_off.svg" alt="Italian Trulli"></img>
                    </div>
                </div>

                <div className="page-content">
                    <p className="title">Title</p>
                    <p className="subtitle">Subtitle</p>
                    <Hyphenated>
                        <p>Special attention has been given to grid and tree components to make them stand-out in your application Pneumonoultramicroscopicsilicovolcanoconiosis. Crisp and sharp edges, clean headers, attractive widget columns and well designed header and footer toolbars mean you can enjoy the power of ExtJs data and grid packages with a nice and professional interface.</p>
                        <p>Jo Swinson pledged to legalise cannabis, tax frequent flyers and launch a £130 billion capital investment programme today in a bid to halt the Liberal Democrats’ slide in the polls.</p>
                        <p>Lorem ipsum <Tooltip></Tooltip> sit amet, consectetur adipiscing elit. Quisque at tincidunt lacus. Morbi porttitor risus at elit blandit sollicitudin. Suspendisse fermentum euismod ipsum, a ultricies lacus finibus et. Aenean non vulputate dui, quis faucibus purus. Aliquam accumsan at elit quis consectetur. Curabitur nibh justo, semper at lacus non, ullamcorper auctor leo. Mauris varius ante mi, id vehicula metus dapibus vel. Sed aliquet suscipit finibus. Suspendisse potenti. Morbi lacinia odio condimentum tempus ultricies. Maecenas varius dignissim lorem, in accumsan ipsum scelerisque nec. Duis eget pretium leo.</p>
                        <p>Duis eget nunc a velit hendrerit dapibus. Aliquam sit amet ultricies erat, ut semper sapien. Nam vel faucibus neque. Mauris <Tooltip></Tooltip> commodo sem non porta. Donec ut enim nec tellus placerat feugiat sed ac purus. Nulla ultricies risus vitae orci tincidunt, id consectetur quam venenatis. Nunc hendrerit massa at velit sagittis, nec fermentum dui luctus. Morbi ante nunc, tempor vitae enim condimentum, commodo molestie mauris. Vestibulum consectetur consequat commodo. Maecenas id neque vel magna fermentum interdum. Curabitur lacinia porta odio, sed sollicitudin diam condimentum eu. Quisque aliquam rhoncus metus non hendrerit.</p>
                        <p>Proin venenatis ligula nec urna imperdiet, non tempus mi egestas. Mauris lobortis purus diam, sed venenatis nibh elementum eu. Ut ultrices tempor aliquet. Suspendisse blandit auctor velit, sagittis elementum justo tincidunt vitae. Pellentesque vel mattis augue. In id nisi efficitur, scelerisque enim eu, venenatis quam. In cursus magna sit amet elit hendrerit, vel porttitor diam tincidunt. Cras sit amet luctus velit. Suspendisse imperdiet, justo vel congue lacinia, arcu nunc finibus lorem, eu malesuada dui ipsum nec neque. Donec vel ante et orci egestas mollis vitae quis elit. Suspendisse tempor enim vel erat venenatis maximus. Maecenas pharetra feugiat eros, a efficitur nibh ullamcorper a. Integer id luctus magna. Nunc in tellus at lorem egestas tristique ut eget nulla. Sed eu nulla in elit faucibus ullamcorper.</p>
                        <p>A Secretaria de Estado da Conservação da Natureza, das Florestas e do Ordenamento do Território, ocupada por João Catarino, ficará em Castelo Branco. O governante já estava nesta capital de distrito, onde tutelava a Valorização do Interior. Agora, esta pasta muda de mãos e passa a ser gerida a partir de Bragança. Aliás, Isabel Ferreira, secretária de Estado da Valorização do Interior, já está desde segunda-feira instalada em Bragança (onde vive). Finalmente, a Secretaria de Estado da Acção Social, de que é titular Rita da Cunha Mendes, terá sede na Guarda, a partir de 9 de Dezembro.</p>
                    </Hyphenated>
                </div>
            </div>
        );
    }
}

export default Page;
