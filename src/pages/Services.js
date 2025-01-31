import React from "react";
import "../styles/Services.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const Services = () => {
  return (
    <div className="equip">
      <div className="services">
        <h2>EQUIPMENT AND FACILITIES</h2>
      </div>
      <div className="tools">
        <Table>
          <Thead>
            <Tr>
              <Th>Item of Equipment</Th>
              <Th>Description, make and age (years)</Th>
              <Th>Conditions (new, good, poor) and number available</Th>

              <Th>Owned</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td colspan="4">EARTH MOVING:-</Td>
            </Tr>
            <Tr>
              <Td>1.Grader</Td>
              <Td>CAT 120H & CAT 122G</Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned </Td>
            </Tr>
            <Tr>
              <Td>2.Bull Dozer</Td>
              <Td>SEM Dozer</Td>
              <Td>Good, 1 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>3.Excavator</Td>
              <Td>SANY & CAT </Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned </Td>
            </Tr>
            <Tr>
              <Td>4.Roller</Td>
              <Td>SANY & CAT </Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>5.SinoTruck </Td>
              <Td>Sino truck 40 tonnes</Td>
              <Td>Good, 4 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>6.Water Bowser Truck </Td>
              <Td>water bowser truck</Td>
              <Td>Good, 1 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td colspan="4">EQUIPMENT</Td>
            </Tr>
            <Tr>
              <Td>Tower Crane, </Td>
              <Td>Type E 401, 3T, 45m Height; 36m jib</Td>
              <Td>Good, 1 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td colspan="4">CONCRETE PLANT: -</Td>
            </Tr>
            <Tr>
              <Td>Concrete Mixer Ltr.350</Td>
              <Td>Lombading Model 90</Td>
              <Td>New, 4 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Precast Concrete Moulds</Td>
              <Td></Td>
              <Td>Assorted</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Self-Loading Mixers 450 Ltr</Td>
              <Td>PH & TS II Engine</Td>
              <Td>Good, 3 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Small Mixers</Td>
              <Td></Td>
              <Td>New, 5 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Diesel/Electric/Concrete Vibrators</Td>
              <Td>1990 & 1998 Honda</Td>
              <Td>Good, 10 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Concrete Cube Moulds</Td>
              <Td></Td>
              <Td>Assorted</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td colspan="4">ELECTRO-MECHANICAL EQUIPMENT:</Td>
            </Tr>
            <Tr>
              <Td>Dewatering pump, 1999, Japan</Td>
              <Td></Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Diesel Generator 22 KVA</Td>
              <Td>LPW3</Td>
              <Td>New, 1 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Diesel Compressor 125/175 complete with 2 hammers</Td>
              <Td>Duetz Engine Model 1990</Td>
              <Td>New, 3 No</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Jumping Compactors</Td>
              <Td></Td>
              <Td>Good, 8 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Plate Compactors</Td>
              <Td>1995 Honda/Briggs & Stratton</Td>
              <Td>New, Good, 3 No</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Vibrator Roller 2 ton, Pedestrian</Td>
              <Td>Hertz Engine, 1989</Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>
                Concrete Multi Block Making Machine 200 x 200 x 400mm Capacity
              </Td>
              <Td>Dapta gear – Model 1996, Ratio 35 – 1</Td>
              <Td>Good, 4 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Double Drum Roller 10 ton (Drive) Bomag BW 80 AD</Td>
              <Td></Td>
              <Td>New, 2 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td colspan="4">WORKSHOP EQUIPMENT:-</Td>
            </Tr>
            <Tr>
              <Td>Full Equipped Carpentry Workshop</Td>
              <Td></Td>
              <Td>Good, 1 No.</Td>
              <Td>Owned </Td>
            </Tr>
            <Tr>
              <Td>Welding (Generator)</Td>
              <Td>50 KVA</Td>
              <Td>Good, 1 Set</Td>
              <Td>Owned </Td>
            </Tr>
            <Tr>
              <Td>Welding Machine 300 Amp</Td>
              <Td>Double Racer</Td>
              <Td>Good, 4 No.</Td>
              <Td>Owned </Td>
            </Tr>
            <Tr>
              <Td>Hoisting Equipment</Td>
              <Td></Td>
              <Td>2 sets</Td>
              <Td>Owned </Td>
            </Tr>
            <Tr>
              <Td colspan="4">VEHICLES:-</Td>
            </Tr>
            <Tr>
              <Td>Pick Ups, Nissan Datsun, 1-2 Tons</Td>
              <Td>1999 & 1998</Td>
              <Td>Good, 4 No.</Td>
              <Td>Owned </Td>
            </Tr>
            <Tr>
              <Td colspan="4">TIPPERS & SITE DUMPERS:-</Td>
            </Tr>
            <Tr>
              <Td>Tipper Truck, 25tons Mercedes Benz</Td>
              <Td>2020 Model</Td>
              <Td>Good, 18 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Tipper Truck, 7ton ISUZU</Td>
              <Td>1992 Model</Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>5 Ton Flat Bed, ISUZU</Td>
              <Td></Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Tipper Truck 15 ton ISUZU</Td>
              <Td>1988 Model</Td>
              <Td>Good, 1 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Dump Trucks </Td>
              <Td>2019 Model </Td>
              <Td>Good ,3 No </Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Dump Trucks </Td>
              <Td>2018 Model </Td>
              <Td>Good ,4 No </Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Self-Loader Mitsubishi (ISUZU) 4 ton</Td>
              <Td>1990 Model </Td>
              <Td>Good ,1 No </Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Site Dumper 1 Ton</Td>
              <Td>PHII Model 89</Td>
              <Td>Good ,1 No </Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Site Dumper 2 Ton</Td>
              <Td></Td>
              <Td>Good ,3 No </Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td colspan="4">GENERAL:-</Td>
            </Tr>
            <Tr>
              <Td>Standard Steel Scaffolding</Td>
              <Td>Assorted</Td>
              <Td>Good, 4000m2</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Metal Fabrication Equipment</Td>
              <Td>Assorted</Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Masonry Tools</Td>
              <Td>Assorted</Td>
              <Td>Good</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Plumbing Tools/Fitters Tools</Td>
              <Td>Assorted</Td>
              <Td>Good, 5 Set</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Pressure Testing Equipment</Td>
              <Td>Assorted</Td>
              <Td>Good, 3 Set</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Concrete Cutter/Asphalt </Td>
              <Td>1998 Honda</Td>
              <Td>New, 1 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Dumpy Level </Td>
              <Td>Wild</Td>
              <Td>Good, 4 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Theodolite</Td>
              <Td>Wild</Td>
              <Td>Good, 2 No.</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Assorted tower rigging equipment</Td>
              <Td></Td>
              <Td>Good, Lot</Td>
              <Td>Owned</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Services;
