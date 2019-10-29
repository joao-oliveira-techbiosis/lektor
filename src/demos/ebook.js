import React from 'react';
import Tooltip from "../components/tooltip/tooltip";

class Welcome extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <h1>Title</h1>
                <p>Lorem ipsum <Tooltip>dolor</Tooltip> sit amet, consectetur adipiscing elit. Quisque at tincidunt lacus. Morbi porttitor risus at elit blandit sollicitudin. Suspendisse fermentum euismod ipsum, a ultricies lacus finibus et. Aenean non vulputate dui, quis faucibus purus. Aliquam accumsan at elit quis consectetur. Curabitur nibh justo, semper at lacus non, ullamcorper auctor leo. Mauris varius ante mi, id vehicula metus dapibus vel. Sed aliquet suscipit finibus. Suspendisse potenti. Morbi lacinia odio condimentum tempus ultricies. Maecenas varius dignissim lorem, in accumsan ipsum scelerisque nec. Duis eget pretium leo.</p>
                <p>Duis eget nunc a velit hendrerit dapibus. Aliquam sit amet ultricies erat, ut semper sapien. Nam vel faucibus neque. Mauris bibendum commodo sem non porta. Donec ut enim nec tellus placerat feugiat sed ac purus. Nulla ultricies risus vitae orci tincidunt, id consectetur quam venenatis. Nunc hendrerit massa at velit sagittis, nec fermentum dui luctus. Morbi ante nunc, tempor vitae enim condimentum, commodo molestie mauris. Vestibulum consectetur consequat commodo. Maecenas id neque vel magna fermentum interdum. Curabitur lacinia porta odio, sed sollicitudin diam condimentum eu. Quisque aliquam rhoncus metus non hendrerit.</p>
                <p>Proin venenatis ligula nec urna imperdiet, non tempus mi egestas. Mauris lobortis purus diam, sed venenatis nibh elementum eu. Ut ultrices tempor aliquet. Suspendisse blandit auctor velit, sagittis elementum justo tincidunt vitae. Pellentesque vel mattis augue. In id nisi efficitur, scelerisque enim eu, venenatis quam. In cursus magna sit amet elit hendrerit, vel porttitor diam tincidunt. Cras sit amet luctus velit. Suspendisse imperdiet, justo vel congue lacinia, arcu nunc finibus lorem, eu malesuada dui ipsum nec neque. Donec vel ante et orci egestas mollis vitae quis elit. Suspendisse tempor enim vel erat venenatis maximus. Maecenas pharetra feugiat eros, a efficitur nibh ullamcorper a. Integer id luctus magna. Nunc in tellus at lorem egestas tristique ut eget nulla. Sed eu nulla in elit faucibus ullamcorper.</p>
            </React.Fragment>
        );
    }
}


export default Welcome;
