// on burger click open the responsive nav menu
function responsiveNav() {
    const topNav = document.getElementById('myTopnav');

    if (topNav.className === 'topnav') {
        topNav.className += ' responsive';
    } else {
        topNav.className = 'topnav';
    }
}

export default responsiveNav;
