import {
  Box,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import img1 from "../imges/img1.jpg";
import aod1 from "../imges/aod1.png";
import revv1 from "../imges/revv1.png";
import shine1 from "../imges/shine1.png";
import { LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./Project.module.css";
import chakra from "../imges/chakra.png";
AOS.init();

function ProjectPage() {
  return (
    <Stack id="project" p={[2, 10]}>
      <SimpleGrid columns={[1, 1, 2, 2]} justifyContent={"space-between"}>
        <VStack
          claseeName="projectContainer"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold">
           Adorama.com
          </Text>
          <Box className="image-container4">
            <Img src={aod1} alt="img" />
          </Box>
          <Text textAlign={"center"} width="80%" className={style.discription}>
          Adorama is a Ecommerce website which provides DSLR cameras & accessories , 4K video gear, Musical instruments & equipment , VR, PC & next generation console gaming , and Home Electronics like the latest Smart Home devices. 
          </Text>
          <HStack>
            <div className={style.techStack}>
              
              <img
                src="https://spsanchore13.github.io/shantilal/static/media/mongodb.0781b723446e1f8a1734f7831a9c3313.svg"
                alt="https://spsanchore13.github.io/shantilal/static/media/mongodb.0781b723446e1f8a1734f7831a9c3313.svg"
              />
              <img
                src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                alt="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <img
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                alt="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              />
              <img src={chakra} alt={chakra} />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/gouseimmu/Adorama-Clone"
            >
              <button className={style.button}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://adorama.vercel.app/"
            >
              {" "}
              <button className={style.button}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>

        <VStack
          claseeName="projectContainer"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          p={[2, 5]}
          spacing={2}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text align="left" fontSize="2xl" fontWeight="semibold">
            Zara.com
          </Text>
          <Box className="image-container1">
            <Img src={img1} alt="img" />
          </Box>
          <Text textAlign={"center"} width="80%" className={style.discription}>
          Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world's largest distribution groups.
          </Text>
          <HStack>
            <div className={style.techStack}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <img src={chakra} alt={chakra} />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/rajkumarsahu89/Zara-clone"
            >
              <button className={style.button}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>

            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://cerulean-blancmange-9d2121.netlify.app/"
            >
              <button className={style.button}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>
        </VStack>

        <VStack
          claseeName="projectContainer"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Revv.com
          </Text>
          <Box className="image-container2">
            <Img src={revv1} alt="img" />
          </Box>
          <Text textAlign={"center"} width="80%" className={style.discription}>
          Revv Self Drive Car Rental in India is a reliable name in the industry as they aim to deliver the best experience to their customers..
          </Text>
          <HStack>
            <div className={style.techStack}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />
             
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/rajkumarsahu89/Revv.com-Clone"
            >
              <button className={style.button}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://radiant-pasca-c8b0ba.netlify.app/"
            >
              {" "}
              <button className={style.button}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>

        <VStack
          claseeName="projectContainer"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Shine.com
          </Text>
          <Box className="image-container3">
            <Img src={shine1} alt="img" />
          </Box>
          <Text textAlign={"center"} width="80%" className={style.discription}>
          Shine.com is the most innovative and second largest online job portal in India. Founded in 2008, over the past decade, Shine.com has become a prominent name in the recruitment industry. The popularity of the portal is evident from the fact that it has crossed the 3.4 crore candidate landmark and has more than 3 lakh latest job vacancies from leading companies on the site.
          </Text>
          <HStack>
            <div className={style.techStack}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/sshilpi110/www.shine.com"
            >
              <button className={style.button}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://ubiquitous-centaur-f20fa3.netlify.app/"
            >
              {" "}
              <button className={style.button}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>
      </SimpleGrid>
    </Stack>
  );
}

export default ProjectPage;
