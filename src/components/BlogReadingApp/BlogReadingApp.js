import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BLOGS = [
  {
    id: 1,
    title: "1) Zion Adventure Photog",
    body: "When you're first approaching the question of how to start a blog, check out Zion Adventure Photog. The blog has a dual purpose: owner Arika’s photography portfolio and establishing her expertise of the Zion area. With these, she’s able to make money blogging. The blog’s ruggedly playful green and yellow color scheme evokes nature and sunshine. The blog’s homepage features visual testimonials of happy clients enjoying their adventures. She embeds her Instagram Feed directly onto her site, spreading the word about her service and drawing people deeper into her brand. The blog design mirrors its content in depth and expertise. Detailed posts provide detailed guidance on activities such as canyoneering and hiking. From the written content, it’s clear that Arika is an expert in her field, and the visuals confirm her photography skills.",
  },
  {
    id: 2,
    title: "2) Mrs. Space Cadet",
    body: "On this blog’s My Story page, the creator explains how she couldn’t find an online space that featured anything other than people’s perfect marathon training journeys. In response, she created this wonderfully authentic blog highlighting her, “Running through life one struggle at a time.” The top fold features an image of the creator wearing crooked glasses and running on a treadmill with roller skates—a perfect embodiment of her blog title. Her site features individual pages for her blog, podcast and online store and includes links to her social media, all areas where she shares her incredibly relatable content.",
  },
  {
    id: 3,
    title: "3) Simply Tabitha",
    body: "Tabitha's personal blog is a stellar example of how sharing your thoughts and advice can powerfully build your online brand. She dishes out fashion and beauty advice in her blog posts then helps her audience of mommas replicate her look with a Shop the Post widget at the end. And with Pinterest's Save buttons hovering over each picture, fans can keep her glamorous aesthetic on hand for inspiration. Take note from this blog example—partnering with an affiliate and linking out to recommended products in your posts is a great way to monetize your blog, as you’ll earn a commission for every sale that comes through your site.",
  },
  {
    id: 4,
    title: "4) Lizzy Hadfield",
    body: "What is a blog, anyway? Lizzy Hadfield provides one especially photogenic answer. This fashion blog example serves as this marketing influencer’s visual diary. Lizzy fills up her website’s grid layout with a cohesive visual language, featuring posts and softly-colored photographs. This layout looks just as great on mobile, too, with the different posts compiled into a full-screen scroll. In addition, Lizzy uses her blog as a tool to build engagement with her brand, linking to her Instagram, YouTube, and Twitter pages in a Follow section on the top menu bar.",
  },
  {
    id: 5,
    title: "5) Suvelle Cuisine",
    body: "With a beige color scheme and contemporary design, Susana Machado’s Suvelle Cuisine merges several types of blogs (food, style and beauty) into a sleek, modern aesthetic. As Susana herself says, her focus is on “the most beautiful things in life.” Her blog features everything from a recipe for focaccia and tips for spring fashion, and she supplements this content with an alluring portfolio of luxurious couture and cuisine photos to build her authority. When you land on her homepage, a pop-up invites you to join her mailing list, an example of  using email marketing tools to reach her readers. In addition, well-organized and intriguing blog categories at the top of the page further invite readers to get lost in Susana’s world.",
  },
  {
    id: 6,
    title: "6) Mikaela Reuben",
    body: "A video of Mikaela working in her garden surrounded by sunny yellow trees welcomes visitors to this culinary nutrition consulting website. The clean and stylish design highlights her professional cuisine photographs, and each photo acts as a button that leads visitors to the complete recipe. The simplistic and graceful layout includes Wix Forms and Payments, a seamless way for Mikaela to collect and organize client details from visitors who subscribe to her newsletter or contact her to schedule an appointment. ",
  },
  {
    id: 7,
    title: "7) Seasons in Colour",
    body: "Seasons in Colour is Jenny Kakoudakis’s interior design featuring beautiful, customized spaces with modern and trendy pieces. Jenny provides professional designers educational content with a sophisticated, tasteful and user-friendly site—earning her Best Colour Inspiration at the 2016 Amara Interior Blog Awards. The blog’s visually appealing backdrop features a large photo of a cozy, living room set on the top fold. A large button links to her article 2022 New Interior Trends, establishing her blog’s timeliness. Below, a grid of beautiful photos outlined with a white border organize alternating category pages like Kitchen Design and Interior Styling. Jenny also takes advantage of affiliate links with a page dedicated to shopping, monetizing her love of home decor. ",
  },
  {
    id: 8,
    title: "8) Not Another Cooking Show",
    body: "Learn how to start a food blog from Stephen Cusato’s Not Another Cooking Show. While Stephen primarily uses YouTube to show viewers how to prepare simple, tasty dishes, his eye-catching blog draws fans further into this video marketing brand’s culinary world, even featuring one of his videos as his homepage’s backdrop. A menu bar clearly displays each page’s name in black, sans serif font, and blog posts are broken down by meal category, offering visitors a simple way to navigate through his abundance of content. ",
  },
  {
    id: 9,
    title: "9) Roshini Kumar ",
    body: "Roshini Kumar’s blog features bright hues, such as hot pink and lime green, reminiscent of the 90s to capture her visitor’s attention and sell a diverse range of the era’s clothing. The homepage features Polaroid-like photos and even a nostalgic Windows screen-inspired design with the website’s title Rosh. Roshini doesn’t just use her platform to sell clothing, but also to share her beliefs, using casual language throughout her content to advocate her ideas on feminism, animal rights, and individual expression.",
  },
  {
    id: 10,
    title: "10) Olivia and Laura ",
    body: "This fashion and lifestyle blog uses stylish, high-quality photography to share content such as  trendy outfit inspo, food hot spots and the best tourist locations in Canada. The blog is broken up into several categories, including Fashion, Lifestyle and Food, with a simple, clear menu at the top of the page to guide readers. The white space on Olivia and Laura’s blog allows their imagery and content to shine. Their blog features clear links to their Instagram and Pinterest boards, making it easy to navigate to these visually-cohesive brand extensions. ",
  },
];

function BlogDetail() {
  const [activePost, setActivePost] = useState();

  const blogTitles = BLOGS.map((blog) => (
    <p key={blog.id} onClick={() => setActivePost(blog)}>
      {blog.title}
    </p>
  ));

  return (
    <Container>
        <Row className="blog-container">
            <Col className="blog-title">{blogTitles}</Col>
            <Col className="blog-post">{activePost && (
                <>
                    <h2>{activePost.title}</h2>
                    <p>{activePost.body}</p>
                </>
            )}
            </Col>
        </Row>
    </Container>
  );
}

export default BlogDetail;