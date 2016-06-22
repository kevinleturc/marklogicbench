package marklogic

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class CommitSimulationREST extends Simulation {
  val httpConf = http
    .baseURL("http://localhost:8030")
    .digestAuth("admin", "admin")
    .disableCaching

  val commit = exec(http("commit")
    .post("/v1/documents?extension=xml&collection=rest-ootb")
    .body(StringBody("""<document xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><ecm__name xsi:type="xs:string">doc</ecm__name><ecm__fulltextJobId xsi:type="xs:string">f3f0c916-4727-465c-96e8-0bc2e49c0845</ecm__fulltextJobId><ecm__racl><nxml__item xsi:type="xs:string">Administrator</nxml__item><nxml__item xsi:type="xs:string">administrators</nxml__item><nxml__item xsi:type="xs:string">members</nxml__item></ecm__racl><ecm__primaryType xsi:type="xs:string">MyDocType</ecm__primaryType><my__testDefault xsi:type="xs:string">the default value</my__testDefault><my__testDefaultLong xsi:type="xs:long">0</my__testDefaultLong><ecm__id xsi:type="xs:string">f3f0c916-4727-465c-96e8-0bc2e49c0845</ecm__id><ecm__parentId xsi:type="xs:string">00000000-0000-0000-0000-000000000000</ecm__parentId><ecm__ancestorIds><nxml__item xsi:type="xs:string">00000000-0000-0000-0000-000000000000</nxml__item></ecm__ancestorIds><my__string xsi:type="xs:string">foo</my__string></document>"""))
    .header("Content-Type", "application/xml"))

  val commitGroup = repeat(5000, "i") { exec(commit) }

  setUp(scenario("commitmany").exec(commitGroup).inject(atOnceUsers(20)))
    .protocols(httpConf)
}
