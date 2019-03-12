import React from 'react';

export default function inner(props) {
    const {list_cats} = props;
    return (
        <React.Fragment>
            <div class="list_cats">
                {
                    list_cats.map((item, i) => {
                        return (
                            <div className="item" key={i}>
                                <h3>{item.id}</h3>
                                <img alt={item.id} src={item.url}></img>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
}