
export const setToken = (user) => {

    const currentUser = { email: user.email };

    //get jwt token
    fetch('https://genius-car-server-sigma-five.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //set in local storage
            localStorage.setItem('genius-Token', data.token);

        })
}

