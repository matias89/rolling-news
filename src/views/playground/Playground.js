import React, { Component } from 'react';
// Components
import Test from '../../components/test/Test';
import Button from '../../components/button/Button';
import Aside from '../../components/aside/Aside';
class Playground extends Component {
    render() {
        return (
            <div id="playground" className="container">
                <h1>PlayGround</h1>
                
                <article id="test">
                    <h3>Test Component</h3>
                    <Test testProp="Soy una propiedad" />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>testProp</li>
                    </ul>
                </article>

                <article id="button">
                    <h3>Button Component</h3>
                    <Button id="1" />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>id</li>
                    </ul>
                </article>

                <article>
                    <h3>Aside Component</h3>
                    <Aside
                        items={[
                            {
                                id: 1,
                                title:'titulo1',
                                img: 'https://www.hola.com/imagenes/estar-bien/20180831128704/ronroneo-gatos-causas/0-595-638/gato-ronroneo-1-t.jpg?filter=w600&filter=ds75'
                            },
                            {
                                id: 2,
                                title:'titulo2',
                                img: 'https://www.hola.com/imagenes/estar-bien/20180831128704/ronroneo-gatos-causas/0-595-638/gato-ronroneo-1-t.jpg?filter=w600&filter=ds75'
                            }
                        ]}
                    />
                    <h4>Propiedades</h4>
                </article>

            </div>
        );
    }
}

export default Playground;