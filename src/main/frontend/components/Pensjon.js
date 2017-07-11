/**
 * Created by camp-cms on 10.07.2017.
 */


let React = require("react");

class Pensjon extends React.component{

    render(){
        return (
            <div>
            <Row>
            <Col xs={12}> <h3> Statens pensjonskasse </h3> </Col>
            </Row>
            <Row>
            <Col xs={12}> <p> Ordinært sett kan du ta ut pensjon fra statens lånekasse når du har fylt 70 år. Alle som har
            bodd i Norge i mer enn 3 år etter de har fylt 16 år har rett til en slik folkepensjon. Din
            pensjon avhenger av hvor mye penger din (tidligere) arbeidsgiver har satt av, men du vil også
            kunne spare penger til din egen pensjon.. </p> </Col>
            </Row>
            <Row>
                <Col xs={5}> <FlatButton label="Din pensjon"
                                         href="https://www.nav.no/no/Person/Pensjon/Hva+kan+jeg+fa+i+pensjon"/> </Col>
                <Col xs={2} />
                <Col xs={5}> <FlatButton label="Dine pensjonsavtaler"
                                         href="https://www.norskpensjon.no/"/> </Col>
            </Row>
            </div>
        )
    }
}

export default Pensjon;