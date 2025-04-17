from langchain_core.prompts import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
    AIMessagePromptTemplate,
)

# Enhanced prompt template with multi-modal support
system_template = """
You are an advanced AI assistant capable of processing both textual and URL-based information:

Data Processing Capabilities:
• Text Analysis: Process and analyze plain text content
• URL Processing: Extract and analyze information from web URLs
• Image URLs: Handle image URL references and descriptions
• Document URLs: Process document links and their content summaries

Response Guidelines:
1. For Text-Based Queries:
   - Provide detailed analysis of the text content
   - Extract key topics and themes
   - Identify relevant context and relationships
   - Offer structured insights and recommendations

2. For URL-Based Queries:
   - Validate and process the URL content
   - Extract relevant information from web pages
   - Analyze webpage structure and components
   - Provide source credibility assessment
   - Summarize key findings from the URL

3. For Mixed Queries (Text + URLs):
   - Combine insights from both sources
   - Cross-reference information
   - Identify patterns and correlations
   - Provide integrated analysis

4. Response Structure:
   - Clear section headings
   - Bullet points for key information
   - Source citations where applicable
   - Confidence levels for analysis
   - Related resources and references

5. Quality Control:
   - Verify information accuracy
   - Cross-validate data points
   - Highlight potential uncertainties
   - Provide confidence scores

6. Error Handling:
   - Invalid URL detection
   - Content accessibility checks
   - Language processing errors
   - Data quality issues

Format your responses with:
• Overview
• Detailed Analysis
• Key Findings
• Supporting Evidence
• Recommendations
• Sources and References
• Confidence Assessment

Remember to:
1. Always validate URLs before processing
2. Check content accessibility
3. Provide error messages for invalid inputs
4. Include confidence scores for analyses
5. Cite sources and references
6. Highlight any limitations or assumptions
"""

human_template = """
Chat History:
{history}

Context:
{context}

Query Type: {query_type}
Content: {content}
URLs: {urls}

Task:
Process the provided content and URLs according to the query type and provide a comprehensive response following these steps:
1. Content Validation
2. Data Processing
3. Analysis and Insights
4. Cross-Reference Check
5. Response Generation
6. Quality Assessment

Ensure the response includes:
• Content Summary
• URL Analysis (if applicable)
• Key Insights
• Supporting Evidence
• Recommendations
• Confidence Scores
• Error Reports (if any)
"""

ai_template = """
Based on the provided inputs, here is the comprehensive analysis:

{response}

Confidence Score: {confidence_score}
Processing Time: {processing_time}
Sources Analyzed: {sources}

Additional Notes:
- {notes}

If you need clarification or have follow-up questions, feel free to ask!
"""

# Creating the final chat prompt template
system_message_prompt = SystemMessagePromptTemplate.from_template(system_template)
human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)
ai_message_prompt = AIMessagePromptTemplate.from_template(ai_template)

prompt = ChatPromptTemplate.from_messages([
    system_message_prompt,
    human_message_prompt,
    ai_message_prompt
])

# Example usage:
# def process_query(query_type, content, urls=None, history=None, context=None):
#     """
#     Process a query with the enhanced template
    
#     Args:
#         query_type (str): Type of query ('text', 'url', or 'mixed')
#         content (str): Main content to analyze
#         urls (list): Optional list of URLs to process
#         history (list): Optional chat history
#         context (str): Optional additional context
    
#     Returns:
#         str: Formatted response from the AI
#     """
#     formatted_prompt = prompt.format(
#         query_type=query_type,
#         content=content,
#         urls=urls or [],
#         history=history or [],
#         context=context or "No additional context provided"
#     )
#     return formatted_prompt