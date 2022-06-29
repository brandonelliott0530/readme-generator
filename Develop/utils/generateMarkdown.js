


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license === "MIT") {
    licenseLink = `[![License: MIT](https://opensource.org/licenses/MIT)`
  } else if (license === "GPL") {
    licenseLink = `[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  }else if (license === "BSD") {
    licenseLink = `[![License](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    licenseLink = ""
  }
}
renderLicenseLink()

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  
  if (license === "MIT") {
    licenseSection = `Copyright ${response.year} ${response.GitHub}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === "GPL") {
    licenseSection = ` Copyright (C) ${response.year}  ${response.GitHub}
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  } else if (license === "BSD") {
    licenseSection = `Copyright <YEAR> <COPYRIGHT HOLDER>
    
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    `
  } else {
    licenseSection = `No licensing information available for this project.`
  }
}
renderLicenseSection()


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  
  return `
  # ${response.title}
  ![License: MIT](https://img.shields.io/badge/License-${response.license}-yellow.svg)
  
  
  
  ## Description
  ${response.description}
  
  
  * [Installation](./${response.title}.md#installation)
  
  * [Usage](./${response.title}.md#usage),
  
  * [Contributing](./${response.title}.md#contributing)
  
  * [Tests](./${response.title}.md#tests)
  
  * [Questions](./${response.title}.md#questions)
  
  * [License](./${response.title}.md#license)
  
  ## Installation
  ${response.installation}
  
  
  
  ## Usage
  ${response.usage}
  
  
  ## Contributing
  ${response.contributing}
  
  ## Tests
  ${response.tests}    
  
  ## Questions
  
  Do you have any questions about this project? If so, please reach out to me at either my email address or contact me at my GitHub.
  
  #### Email Address
  [${response.email}](${response.email})
  
  #### GitHub URL
  [${response.GitHub}](${response.GitHub})
  
  ## License 
  Copyright (C) ${response.year} 
  This project uses the ${response.license} license.` 
  
}






module.exports = generateMarkdown;

