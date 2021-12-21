const footerLinks = {
    cl : [
        { title: "Passajero", link: "https://chile.didiglobal.com/" },
        { title: "Socio Conductor", link: "https://chile.didiglobal.com/" },
        { title: "Ciudades", link: "https://chile.didiglobal.com/" },
        { title: "DIDI Taxi", link: "https://chile.didiglobal.com/" },
        { title: "Seguridad", link: "https://chile.didiglobal.com/" },
      ],
}

const countries = [{name: "Argentina", link: 'https://chile.didiglobal.com/'}, {name: "Australia", link: 'https://chile.didiglobal.com/'},
{name: "Brasil", link: 'https://chile.didiglobal.com/'}, {name: "Chile", link: 'https://chile.didiglobal.com/'}, {name: "Columbia", link: 'https://chile.didiglobal.com/'},
{name: "Ecuador", link: 'https://chile.didiglobal.com/'}, {name: "Japon", link: 'https://chile.didiglobal.com/'}, {name: "Ecuador", link: 'https://chile.didiglobal.com/'},{name: "Ecuador", link: 'https://chile.didiglobal.com/'},
{name: "Ecuador", link: 'https://chile.didiglobal.com/'},{name: "Ecuador", link: 'https://chile.didiglobal.com/'}]

const getFooterLinks = (country) => {
    return footerLinks[country]
}

const getCountriesLinks = () => {
    return countries
}

export { getFooterLinks, getCountriesLinks };
