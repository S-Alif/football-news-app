let dataFetch = async () => {
  fetch('https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=2a78ffbd3119513469a6e19b3d62a2a056386ef9aee80b7c7ca93090c2aadb06')
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(e => console.log(e))
}

dataFetch()